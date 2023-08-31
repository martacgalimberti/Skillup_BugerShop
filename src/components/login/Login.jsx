import React, { useState } from "react"; 
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox,} from "mdb-react-ui-kit";


function Login() {
    const [justifyActive, setJustifyActive] = useState("tab1");
    
    const handleJustifyClick = (value) => { 
        if (value === justifyActive) {
        return; 
        }
        
        setJustifyActive(value);
    };
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs 
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between" 
            >
                <MDBTabsItem> 
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")}
                        active={justifyActive === "tab1"} 
                        style={{backgroundColor: '#C36A2D', color: 'white'}}
                    > 
                    Login </MDBTabsLink>
                </MDBTabsItem> 
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")} 
                        active={justifyActive === "tab2"}
                        style={{backgroundColor: '#EADCA6', color:"black"}}
                    > Registrati </MDBTabsLink> 
                </MDBTabsItem>
            </MDBTabs>
    
            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <div className="text-center mb-3"> 
                        <p>Accedi con:</p>
                    <div
                        className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}
                    >
                    <MDBBtn
                        tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#C36A2D" }}
                        href="https://www.facebook.com"
                    >
                        <MDBIcon fab icon="facebook-f" size="lg" />
                    </MDBBtn>
                    <MDBBtn tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#C36A2D" }}
                        href="https://www.twitter.com"
                    >
                        <MDBIcon fab icon="twitter" size="lg" />
                    </MDBBtn>
                    <MDBBtn tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#C36A2D" }}
                        href="https://www.google.com"
                    >
                        <MDBIcon fab icon="google" size="lg" />
                    </MDBBtn>
    
                    <MDBBtn tag="a"
                        color="none"
                        className="m-1"
                        style={{ color: "#C36A2D" }}
                        href="https://github.com/"
                    >
                        <MDBIcon fab icon="github" size="lg" />
                    </MDBBtn> 
                    </div>
                    <p className="text-center mt-3">oppure:</p> 
                    </div>
                <MDBInput  
                    wrapperClass="mb-4" 
                    label="Indirizzo email" 
                    id="form1" 
                    type="email"
                /> 
                <MDBInput
                    wrapperClass="mb-4" 
                    label="Password" 
                    id="form2" 
                    type="password"
                />
                <div className="d-flex justify-content-between mx-4 mb-4"> 
                    <MDBCheckbox
                        name="flexCheck" 
                        value="" 
                        id="flexCheckDefault" 
                        label="Ricordami"
                    />
                    <a href="!#" style={{color:'#C36A2D'}}>Hai dimenticato la password?</a> 
                </div>
                <MDBBtn className="mb-4 w-100" style={{backgroundColor: '#C36A2D'}}>Accedi</MDBBtn> 
                <p className="text-center">
                    Non sei iscritto? <a href="#!"  style={{color:'#C36A2D'}}>Registrati</a> 
                </p>
                </MDBTabsPane>
    
                <MDBTabsPane show={justifyActive === "tab2"}> 
                    <div className="text-center mb-3">
                        <p>Accedi con:</p>
                    <div
                        className="d-flex justify-content-between mx-auto" 
                        style={{ width: "40%" }}
                    >
                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#C36A2D" }}
                            href="https://www.facebook.com"
                        >
                            <MDBIcon fab icon="facebook-f" size="lg" />
                        </MDBBtn> 
                        
                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#C36A2D" }}
                            href="https://www.twitter.com"
                        >
                            <MDBIcon fab icon="twitter" size="lg" />
                        </MDBBtn>
                        
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#C36A2D" }}
                            href="https://www.google.com"
                        >
                            <MDBIcon fab icon="google" size="lg" />
                        </MDBBtn>
                        
                        <MDBBtn 
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: "#C36A2D" }}
                            href="https://github.com/"
                        >
                            <MDBIcon fab icon="github" size="lg" />
                        </MDBBtn> 
                    </div>
    
                    <p className="text-center mt-3">oppure:</p> 
                    </div>
    
                <MDBInput 
                    wrapperClass="mb-4" 
                    label="Nome" 
                    id="form1" 
                    type="text" 
                /> 
                <MDBInput
                    wrapperClass="mb-4" 
                    label="Username" 
                    id="form1" 
                    type="text"
                />
                <MDBInput 
                    wrapperClass="mb-4" 
                    label="Email" 
                    id="form1" 
                    type="email" 
                /> 
                <MDBInput
                    wrapperClass="mb-4" 
                    label="Password" 
                    id="form1" 
                    type="password"
                />
                
                <div className="d-flex justify-content-center mb-4"> 
                    <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        label="Ho letto e accetto le condizioni"
                    /> 
                </div>
                <MDBBtn className="mb-4 w-100" style={{backgroundColor: '#C36A2D', color: 'white'}}> Iscriviti </MDBBtn> 
                </MDBTabsPane>
            </MDBTabsContent> 
        </MDBContainer>
    ); 
}

export default Login;