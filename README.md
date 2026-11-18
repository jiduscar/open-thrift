# Open Thrift

Buy & sell pre-loved items in Nigeria. React Native CLI (TypeScript) + Firebase.
Android first; the code stays cross-platform so iOS can follow once an Apple
Developer account exists.

Full spec and decisions live in the "Open Thrift: Native App Spec" doc.

## What's here (phase 1: foundation)

- React Native 0.88 app, package `com.openthrift.app`
- Bottom tabs: Explore, Favourites, Sell (raised purple +), Transactions, Profile
- Stack screens: Item details (modal), My Items, Buy Tokens, Notifications, Help & Support
  (placeholders until their phase)
- Theme (`#8E2DE2` purple) and Work Sans bundled for all text via `AppText`
- Native purple splash with the bag logo
- Firebase native SDKs installed (Auth, Firestore, Storage, Messaging, Functions)
- `firebase/` Firestore + Storage security rules and indexes; `functions/` skeleton
- Token pricing helper with tests (1 token up to ₦50k, 2 up to ₦150k, 3 up to ₦500k,
  4 up to ₦1m, 5 above)

## Setup

Requirements: Node 22.11+, JDK 17, Android Studio with an emulator or a device.

```sh
npm install
```

### Connect Firebase (one time)

1. In the Firebase console, open your project and add an **Android app** with
   package name `com.openthrift.app`.
2. Download `google-services.json` and put it at `android/app/google-services.json`.
   It is git-ignored; never commit it.
3. Enable **Authentication → Email/Password**, **Firestore**, and **Storage**.
4. Deploy rules and indexes: `npx firebase-tools deploy --only firestore,storage`
   (after `npx firebase-tools login` and `npx firebase-tools use <project-id>`).

The Android build fails without `google-services.json`.

### Run

```sh
npm start          # Metro bundler
npm run android    # build and install on emulator/device
```

### Checks

```sh
npx tsc --noEmit
npm run lint
npm test
```

## Project layout

```
App.tsx                 providers + navigation container
src/theme               colours, fonts, spacing
src/components          AppText, tab icons, placeholder screen
src/navigation          root stack, bottom tabs, route types
src/screens             one file per screen
src/lib                 firebase accessors, token pricing
assets/fonts            Work Sans (OFL licence)
firebase/               firestore.rules, storage.rules, indexes
functions/              Cloud Functions (TypeScript)
```

## Build phases

1. Foundation (this)
2. Auth and profile (email/password, biometrics, password reset)
3. Sell and My Items
4. Explore swipe deck, Favourites, item details, image viewer
5. Tokens and Paystack
6. Notifications, emails, Help & Support
7. Hardening, admin dashboard, Play Store testing
