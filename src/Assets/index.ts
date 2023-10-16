import { useEffect, useMemo } from 'react';

export const useLogger = (...params: any) => {
	useEffect(() => console.log(...params), [params]);
};

export const baseUrl = 'https://dating-app-server-gdjw.onrender.com';
// export const baseUrl = 'http://localhost:5000';

const callbacks: { key: string; cb: Function }[] = [];

const useOutsideListener = (event: MouseEvent) => {
	for (const obj of callbacks) obj.cb(event);
};

export const useRegisterOutsideListener = (key: string, cb: Function) => {
	useMemo(() => ({ key, cb }), [cb, key]);
	callbacks.push({ key, cb });
};

document.addEventListener('mousedown', useOutsideListener);
