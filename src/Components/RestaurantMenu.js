import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN_URL} from "../config";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, [resId]);
    
    async function getRestaurantInfo() {

        console.log(resId);
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`);

        
        const json = await data?.json();
        if(json){
            console.log(json.data);
        }
        setRestaurant(json?.data?.cards[0]?.card);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
    }

    return (
        <div className= "menu">
            <div >
                <h1>Restaurant id: {resId} </h1>
                <h1>{restaurant?.card?.info?.name}</h1>
                <img src={IMG_CDN_URL + restaurant?.card?.info?.cloudinaryImageId} />
                <h2>{restaurant?.card?.info?.area}</h2>
                <h2>{restaurant?.card?.info?.city}</h2>
            </div>
            <div>
               <h1> Menu</h1>
               <div>{
                Object.values(menu?.cards || {}).map((item,index) =>(
                <div key = {index}>
                   <ul>
                   <div><h4>{item.card.card.title}</h4></div>
                   {item?.card?.card?.itemCards?.map((itemCard) => (
                       <li key = {itemCard?.card?.info?.id} >{itemCard?.card?.info?.name}</li>
                       ))}
                    </ul>
                </div>
                ))}
                </div>
               <div>{console.log(Object.values(menu?.cards || {}))}</div>
            </div>
        </div>


    )
}

export default RestaurantMenu;