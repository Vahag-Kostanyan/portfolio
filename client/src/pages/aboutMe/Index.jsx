import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import AbouteMeContent from './AbouteMeContent'
import { motion } from 'framer-motion'

function Index() {

  return (
    <motion.div

    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.4}}}
    >
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <AbouteMeContent/>
        </ColorModeProvider>
    </ChakraProvider>
    </motion.div>
  )
}

export default Index