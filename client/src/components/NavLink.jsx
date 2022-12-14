import { Box, Button, Flex, LinkBox, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, Icon } from "@chakra-ui/icons"
import { BsFillMoonFill } from "react-icons/bs";

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const location = useLocation()

  const color = "teal.500";
  return (
    <Flex width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding="20px 90px" boxShadow="rgb(100 100 111 / 20%) 0px 7px 29px 0px;">


      <Box>
        <IconButton onClick={toggleColorMode} >
          {colorMode === "light" ? (
            <Icon as={BsFillMoonFill} />
          ) : (
            <Icon as={SunIcon} />
          )}
        </IconButton>
      </Box>
      <Box display="flex" gap={8} fontSize="18px">

        {location.pathname === "/" ? (
          <LinkBox
            as='article'
            color={color}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/">Home</Link>
          </LinkBox>
        ) : (
          <LinkBox
            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/">Home</Link>

          </LinkBox>
        )}


        {/* {location.pathname.includes("aboutme") ? (
          <LinkBox
            as='article'
            color={color}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/aboutme">About me</Link>
          </LinkBox>
        ) : (
          <LinkBox
            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/aboutme">About me</Link>

          </LinkBox>
        )} */}


        {location.pathname.includes("skils") ? (
          <LinkBox
            as='article'
            color={color}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/skils">Skils</Link>
          </LinkBox>
        ) : (
          <LinkBox
            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/skils">Skils</Link>

          </LinkBox>
        )}


        {location.pathname.includes("projects") ? (
          <LinkBox
            as='article'
            color={color}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/projects">Projects</Link>
          </LinkBox>
        ) : (
          <LinkBox
            as='article'
            _hover={{
              color: "teal.500",
            }}
          >
            <Link to="/projects">Projects</Link>
          </LinkBox>
        )}

        {location.pathname.includes("contacts") ? (
          <LinkBox
            color={color}

            _hover={{
              color: { color },
            }}
          >
            <Link to="/contacts">Contacts</Link>
          </LinkBox>
        ) : (
          <LinkBox
            _hover={{
              color: { color },
            }}
          >
            <Link to="/contacts">Contacts</Link>
          </LinkBox>
        )}

      </Box>

    </Flex>
  )
}

export default NavLink
