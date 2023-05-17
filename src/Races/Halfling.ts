import Race from './Races';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static countInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.countInstances;
  }
}