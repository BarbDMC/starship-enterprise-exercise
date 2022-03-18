# Starship Enterprise Exercise
Resolution of the exercise Starship Enterprise about create a warp drive management software in Javascript.

<br>

## Exercise approach

The Starship Enterprise is going to a secret mision on Klingon. During a rutine operation, Scotty detects that the compute in charge to manage the warp engine doesn't have a power manegement system for the three plasma injectors that regulate the energy in the antimatter reactor and therefore the ship speed.

Knowledge of the klingons fierceness, He decides to implement an app for offer the best balance between the three injector considering them can be damage in the battle.

The plasma flow reactor has a linear relationship with velocity. For speed up to 100% of light speed, the antimatter reactor needs a plasma flow of 300 mg/s (milligrams per second). Every injector can inject a flow of 100 mg/s.

Every injector can work to 100% of its capacity indefinitely. However, It can work injecting a flow of 99 mg/s about his capacity. Per every mg/s of flow above his capacity, lost a minute of performance, being the working time of the first extra mg/s 99 minutes, and the performance time with extra 99 mg/s, one minute.

Also, the maximun flow in which can work indefinitely downs in function of the injector's damage: per every point of damage, downs one mg/s. If It's damage at 70%, It's maximun flow indefinitely is 30 mg/s. If It's damage at 32%, the maximun flow is 68 mg/s. An injector can continue injecting 99 mg/s extras although to be damage, So a damage injector at 20% can inject 179 mg/s as maximun and work during a minute. If an injector is damage to 100%, it isn't usable.

It must be developed a code that allows calculate the working flow of every injector for a light speed percent wanted, so that can maximize the performance time in a given damage situation. The solutions shouldn't contemplate drain the working time of every injector in secuential form.

<br>

## Install dependencies

1. Use command: `npm init`
1.  Later, run command: `npm install`
<br>

## How to run tests

1. Install Jest: `npm install jest`
1. For run tests use command: `npm run test` 

<br>

