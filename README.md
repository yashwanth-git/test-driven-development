# Test Driven Development

This is a personal lab where I try my best to follow test driven development.

## Personal Understanding on TDD

- Gives confidence to ship the code
- Guides us to switch to clean code [Need to add more about it]
- Forces other devs to also write clean code [To a certain extent]
- Not necessary to check each and every div, span; can focus on the functionalities which needs attention

## Todos

- [x] Setup React TypeScript Project using yarn
- [x] Setup lint, jest and prettier
- [x] Setup basic CI
- [x] Decide the components visualizing the tests
- [ ] Write tests
- [ ] Build components

## Rough Idea

Planning to build a vending machine which returns the coins based on the product purchased. Idea is to return the denominations available in USD from the vending machine [Should check the available coin denominations in USD]. When the amount inserted is exact, the vending machine should not return any value. When a change needs to be returned, the machine should return coins matching the denominations.

### Points to remember

- Return type should be array
- Return empty array when there is not return
- Return the denominations in array if there is a return
- Can use parameterized testing to check various values

## Setup

- React with TypeScript using yarn
- Precommit checks using husky
- Prettier for linting
- CI to check basic installations and test
