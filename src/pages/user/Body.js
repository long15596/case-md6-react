import React from "react";
import Category from "../../components/Category";
import SearchBar from "../../components/SearchBar";
import ShowAllProperty from "../home/ShowAllProperty";
import Footer from "../../components/Footer";
import Password from "./Password";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function Body() {
    let currentUser = useSelector(state => {
        console.log(state)
        return state.users.currentUser
    })
    return (<>
        <Category/>
        <SearchBar/>
        <ShowAllProperty/>
        <Footer/>
        {currentUser ?
            <div id="idForm" style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "none"
            }}>
                <Password/>
            </div> :
            <div></div>
        }
        {/*<Link*/}
        {/*    to={*/}
        {/*        !currentUser ? `property-detail/${property.id}` :*/}
        {/*            currentUser.roles[0].authority === "ROLE_USER" ? `/user/property-detail/${property.id}` :*/}
        {/*                currentUser.roles[0].authority === "ROLE_OWNER" ? `/owner/property-detail/${property.id}` :*/}
        {/*                    `property-detail/${property.id}`*/}
        {/*    }*/}
        {/*/>*/}
    </>)
}