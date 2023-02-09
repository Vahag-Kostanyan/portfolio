import { Flex, Image, position } from '@chakra-ui/react';
import React from 'react';

const Skil = ({ skil, skilName }) => {

    
    return (
        <Flex
            flexDirection="column"
            width="180px"
            height="220px"
            boxShadow="rgb(100 100 111 / 15%) 0px 7px 29px 0px;"
            _hover={{
                boxShadow: "rgb(100 100 111 / 80%) 0px 7px 29px 0px;",
                width: "190px",
                height: "230px",
                transitionDuration: "150ms",
            }}
            borderRadius={10}
            padding="10px 5px"
            alignItems="center"
            justifyContent="center"
            fontSize="30px"

        >
            <Flex
                maxW="130px"

                flex={9}
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={skil}
                    width={skilName == "CSS 3" ? "75%" : "100%"}
                ></Image>
            </Flex>
            <Flex
                flex={3}
                alignItems="center"
                justifyContent="center"
            >
                {skilName}
            </Flex>
        </Flex>
    );
}

export default Skil;
