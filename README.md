# bottom-sheet flicker bug

### On master - react-native-reanimated v2, no flicker
1. npm i
2. npm run android
3. open and close bottom sheet repeatedly, observe no flicker

### On reanimated-v3 - react-native-reanimated v2, flicker
1. git checkout reanimated-v3
1. npm i
2. npm run android
3. open and close bottom sheet repeatedly, observe flicker when closing

