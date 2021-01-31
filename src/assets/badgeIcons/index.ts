import normalSvg from './normal.svg';
import fightingSvg from './fighting.svg';
import flyingSvg from './flying.svg';
import poisonSvg from './poison.svg';
import groundSvg from './ground.svg';
import rockSvg from './rock.svg';
import bugSvg from './bug.svg';
import ghostSvg from './ghost.svg';
import steelSvg from './steel.svg';
import fireSvg from './fire.svg';
import waterSvg from './water.svg';
import grassSvg from './grass.svg';
import electricSvg from './electric.svg';
import psychicSvg from './psychic.svg';
import iceSvg from './ice.svg';
import dragonSvg from './dragon.svg';
import darkSvg from './dark.svg';
import fairySvg from './fairy.svg';

interface IBadgeIcons {
  [key: string]: string;
}

const badgeIcons: IBadgeIcons = {
  normal: normalSvg,
  fighting: fightingSvg,
  flying: flyingSvg,
  poison: poisonSvg,
  ground: groundSvg,
  rock: rockSvg,
  bug: bugSvg,
  ghost: ghostSvg,
  steel: steelSvg,
  fire: fireSvg,
  water: waterSvg,
  grass: grassSvg,
  electric: electricSvg,
  psychic: psychicSvg,
  ice: iceSvg,
  dragon: dragonSvg,
  dark: darkSvg,
  fairy: fairySvg,
  unknown: normalSvg,
  shadow: darkSvg,
};
export { badgeIcons };
