import React, {useContext, useEffect, useState} from 'react';
import { Collapse, Button, Modal, Input, Form } from 'antd';
import SAService from "../services/SAService";
import {SAContext} from '../contexts/SAContext';
import ModalSA from './ModalSA';
import ajouterSA from './ajouterSA';

const { Panel } = Collapse;

const GestionSA =  (props) => {
    const sAContext = useContext(SAContext);
    const {SA, setSA} = sAContext;

    useEffect(() => {
        SAService.getAllSA().then((res) => {
            setSA(res.data)
        })
    },[])

    
    const handleClick = () => {
        props.history.push("/AjouterSA");
    };

    return(
        <div className = "GestionSA">
            <div className="container pt-4">
                <div className="row">
                    <div className="col mt-lg-5 container">
                        <div className="Tete form-inline" style={{ marginTop: "3%" }}>
                            <Button type="primary" onClick = {handleClick}>Ajouter une structure d'accueil</Button>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default GestionSA;