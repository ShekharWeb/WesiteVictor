import { atom } from 'recoil';
import { OrcsList } from '../components/OrcsList';
import { WeaponsList } from '../components/WeaponsList';

export const listState = atom({
	key: 'listState',
	default: 'orcs',
});
