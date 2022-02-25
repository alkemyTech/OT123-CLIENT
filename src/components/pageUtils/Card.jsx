/* eslint-disable react/prop-types */
import React from 'react'
import { GridItem, Text, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ array, direction }) => {
  const navigate = useNavigate()

  return (
    <>
      {array.map((item) => (
        <GridItem
          border="2px solid black"
          backgroundColor="#ffffcc"
          key={item.id}
          w="350px"
          borderRadius="lg"
          boxShadow="lg"
          cursor="pointer"
          textAlign="justify"
          onClick={() => {
            navigate(`/${direction}/${item.id}`)
          }}
        >
          <Text
            fontSize="2xl"
            px={6}
            pt={3}
            pb={3}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {item.name}

          </Text>
          <Text
            px={6}
            pt={3}
            pb={3}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {item.content}

          </Text>
          <Text
            px={6}
            pt={3}
            pb={3}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {item.description}

          </Text>
          <Image src={item.image} />
        </GridItem>
      ))}
    </>
  )
}
Card.propTypes = {
  direction: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,

}
export default Card
