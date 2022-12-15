import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import NavLink from "../../components/NavLink"
import SkilsContent from './SkilsContent'
import { motion } from 'framer-motion'

function Index() {

  return (
    <motion.div

    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <NavLink/>
            <SkilsContent/>
        </ColorModeProvider>
    </ChakraProvider>
    </motion.div> 
  )
}

export default Index