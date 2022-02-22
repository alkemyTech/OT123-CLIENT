/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react'
import { Text, VStack, Grid } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import Card from '../pageUtils/Card'
import { getAllActivities } from '../../services/activitiesService'

const Activities = () => {
  const [loadData, setLoadData] = useState([]);
  const direction = useLocation().pathname.split('/')[1]
  const getData = useCallback(async () => {
    const res = await getAllActivities()
    setLoadData(res.data.result.activities)
  }, [setLoadData])

  useEffect(() => {
    getData()
  }, [getData]);

  return (
    <>
      <VStack my={12} display="flex" textAlign="center">
        <Text fontSize="5xl">Actividades</Text>
        <Text fontSize="2xl" w={{ base: '80%', lg: '50%' }}>
          Estos son las actividades en ¡Somos Más!.
        </Text>
      </VStack>
      <Grid templateColumns="repeat(auto-fill, 350px)" gap={8} mb={12} justifyContent="center">
        <Card
          direction={direction}
          array={loadData}
        />
      </Grid>
    </>
  )
}

export default Activities
