import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react'
import LogoutButton from '../LogoutButton'

const AdminMenu = () => (

  <Menu>
    <MenuButton as={Button} colorScheme="blue">
      Cuenta
    </MenuButton>
    <MenuList>
      <MenuGroup title="Perfil">
        <MenuItem as={NavLink} to="/auth/perfil">Perfil</MenuItem>
        <MenuItem as={NavLink} to="/auth/editarperfil">Editar perfil</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Administración">
        <MenuItem as={NavLink} to="/admin/actividades">Actividades</MenuItem>
        <MenuItem as={NavLink} to="/admin/actividades/:id">Actividad (ID)</MenuItem>
        <MenuItem as={NavLink} to="/admin/actividades/nuevo">Actividad (add)</MenuItem>
        <MenuItem as={NavLink} to="/admin/categorias">Categorias</MenuItem>
        <MenuItem as={NavLink} to="/admin/contactos">Contactos</MenuItem>
        <MenuItem as={NavLink} to="/admin/testimonios">Testimonios</MenuItem>
        <MenuItem as={NavLink} to="/admin/testimonios/nuevo">Testimonios (add)</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuItem>
        <LogoutButton />

      </MenuItem>
    </MenuList>
  </Menu>
)

export default AdminMenu