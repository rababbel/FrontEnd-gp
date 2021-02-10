import React, {useContext, useEffect} from 'react';
import { Collapse } from 'antd';
import SAService from "../services/SAService";
import {SAContext} from '../contexts/SAContext';

const { Panel } = Collapse;

const ConsulterSA =  () => {
    const sAContext = useContext(SAContext);
    const {SA, setSA} = sAContext;

    useEffect(() => {
        SAService.getAllSA().then((res) => {
            console.log(res.data);
            setSA(res.data)
        })
    },[])

    console.log(SA)
    
    return(
        <div className = "ConsulterSA">
            <Collapse accordion>
                {
                    SA.map((sa,index) => {
                        return(
                            <Panel header = {sa.nomStructure} key = {index}>
                                <ul>
                                    <li>Le nom de la structure : {sa.nomStructure}</li>
                                    <li>Description : {sa.description}</li>
                                    <li>Adresse : {sa.adresse}</li>
                                    <li>Email : {sa.email}</li>
                                    <li>Telephone : {sa.tel}</li>  
                                </ul>
                            </Panel>
                        )
                    })
                }
            </Collapse>
        </div>
    )
}

export default ConsulterSA;