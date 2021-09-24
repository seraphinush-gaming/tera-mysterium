+++
date = "2021-08-22"
lastmod = "2021-08-22"
title = "Archer : Overview"
categories = ["character"]
tags = ["class", "archer"]
sources = ["['We Hate Math' theorycrafting discord](https://discord.gg/zY7bbFp)"]
+++

## Info

Key | Value
:-: | :-:
Class | 5

### Base stat values

Stat | Value
:-: | :-:
HP | 1587
MP | 1300
Power | 72
Endurance | 80
Crit Factor | 60
Crit Resist | 53
Crit Power | 2.00
Physical Crit Power | 2.00
Magical Crit Power | 2.00
Physical Piercing | 0
Magical Piercing | 0
Ignoring Physical Resistance | 0
Ignoring Magical Resistance | 0
Attack Speed | 120
Run Speed | 110
Walk Speed | 50
Impact Factor | 50
Balance Factor | 30
Run Speed Bonus | 60
Attack | 5
Defense | 2
Resist Weakening | 50
Resist Periodic | 50
Resist Stun | 50
Damage Modifier | 1.00

## Passive

### Crack Shot
Increase skill damage

```
Increase all skill damage by 10% and grants additional 8% damage when attacking monsters.
Increase the chance to crit by 5% when attacking monsters from the side or rear.
```

### Shrieking Arrow
Increase Physical Piercing

```
Increase Physical Piercing and Overcharge Damage of skills based on your Physical Crit Power.
- Physical Piercing increased by $calcValue(multiple,1005,5000,3).
- Overcharge damage of Radiant Arrow and Penetrating Arrow increased by $calcValue(multiple,1005,1,5).
```

### Safe Distance
Increase skill damage

```
Increase your Focus and skill damage of all attack skills to monsters by 15% when no enemies are within 5m radius.
```

### Seasoned
Decrease RE cost, RE recovery

```
Decrease the RE cost of Backstep by 30, and recovers 10 RE after every successful hit of a Focus Generation skill.
```

## Formula

### Overcharge damage

```
(12.5% * charge level) + (passive effect / 2)
```

### Shrieking Arrow (majorPatchVersion <= 110)

Physical Piercing : 
```
25 Physical Piercing / 0.01 Physical Crit Power
```

Overcharge Damage :
```
0.5% Overcharge Damage / 0.01 Physical Crit Power
```

```
Changelog :

- v111.01
  - Shrieking Arrow
    - Decreased Overcharge Damage increase based on Physical Crit Power by half
    - Decreased Physical Piercing increase based on Physical Crit Power by half
```
