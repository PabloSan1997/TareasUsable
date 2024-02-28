import {useCookies, CookiesProvider} from 'react-cookie';
import React from "react";
import { useAppDispatch, useAppSelector } from './store/store';
import { tareasAction } from './slice/tareasSlice';

export function ProviderCook({children}:{children:JSX.Element|JSX.Element[]}){
    const [cookies] = useCookies(['miCookie']);
    const state = useAppSelector(state=>state.reducerTarea);
    const dispatch = useAppDispatch();
    React.useEffect(()=>{
        if(!state.token){
            dispatch(tareasAction.agregarToken({texto:cookies.miCookie}));
        }
    }),[];
    return(
        <CookiesProvider>
            {children}
        </CookiesProvider>
    );
}