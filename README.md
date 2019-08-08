# Slot Machine
A slot machine simulator written in React + Redux.

To run locally:
```
npm install
```
or
```
yarn
```

Then run the development server:
```
npm run dev
```
And look at localhost:8080 for the app!

## How it works
There are reels with activeSlot (BAR, CHERRY, etc), activePositon (DOUBLE or SINGLE) and activePlacement (top, center, or bottom). When SPIN button is pressed (in RANDOM mode) app generates randoms for these values. After that each reel spins to generated activePosition. 

After spinning is done the app calculates machineState (current configuration of reels and their properties), matches it for Win Conditions and activates them. Also it calculates which slots chould be highlighted as a part of Win Condition.

The best place to inspect data flow is starting from startSpinning() action in *src/store/actions.js*.

All requirements from the task are implemented. 🎉