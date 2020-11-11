import React, { useEffect, useState} from 'react'
import { getNavigationApi } from '../../../api/navigation';
import NavigationWebList from "../../../components/Admin/NavigationWeb/NavigationWebList";

export default function MenuNavigation() {
    const [navigation, setNavigation] = useState([]);
    const [reloadNavigation, setReloadNavigation] = useState(false);

    useEffect(() => { 
        getNavigationApi().then(response => {
            console.log("Navigation" , response);
            setNavigation(response.navigations);
        });
        setReloadNavigation(false);
    }, [reloadNavigation])
    return (
        <div className="navigation">
           <NavigationWebList navigation={navigation} setReloadNavigation={setReloadNavigation}></NavigationWebList>
        </div>
    )
}
