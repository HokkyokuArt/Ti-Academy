import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="info" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Services TI Academy</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/listadeclientes">Clientes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listadeservicos">Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listadepedidos">Pedidos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}