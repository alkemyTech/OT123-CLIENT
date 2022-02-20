import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Heading,
  HStack,
  VStack,
  Button,
  FormLabel,
  Spacer,
  FormControl,
  Textarea,
} from '@chakra-ui/react'
import Alert from '../alert/Alert'
import { getOrganizationById, updateOrganization } from '../../services/organizationsService'

const EditWelcomeText = () => {
  let { id } = useParams()
  id = 1
  const navigate = useNavigate()
  const [activity, setActivity] = useState({
    welcomeText: '',
  })
  const [ready, setReady] = useState(false)
  const [alerts, setAlerts] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => {},
  })
  const loadactivity = async () => {
    if (id) {
      try {
        const loadedactivity = await getOrganizationById(id)
        setActivity({
          welcomeText: loadedactivity.data.result.publicData.welcomeText,
        })
        setReady(true)
      } catch (error) {
        const errorAlert = {
          show: true,
          title: 'Ooops, algo ha fallado!',
          message: error.message,
          icon: 'error',
          onConfirm: () => {},
        }
        setAlerts(errorAlert)
      }
    }
  }
  useEffect(() => {
    loadactivity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateChangeHandler = async (e, values) => {
    e.preventDefault()
    const updatedActivity = await updateOrganization(values)
    if (updatedActivity) {
      const successAlert = {
        show: true,
        title: 'Actividad',
        message: 'La actividad se ha actualizado!',
        icon: 'success',
        onConfirm: () => {},
      }
      setAlerts(successAlert)
      navigate('/')
    }
  }

  return (
    <>
      <Alert {...alerts} />
      {((id && ready) || !id) && (
        <Formik
          initialValues={activity}
          validationSchema={Yup.object({
            welcomeText: Yup.string()
              .required('Nombre requerido!')
              .min(20, 'Nombre muy corto!'),
            content: Yup.string().min(1).max(150).required(),
          })}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <HStack
              display="flex"
              height="100vh"
              backgroundColor="#FAFA88"
              width="100%"
            >
              <VStack
                as="form"
                m="auto"
                p="2"
                w={{ base: '100%', md: '90%', sm: '90%' }}
                h="auto"
                justifyContent="center"
                borderWidth="1px solid white"
                borderRadius="lg"
                boxShadow="lg"
                backgroundColor="white"
                display="block"
                onSubmit={(e) => updateChangeHandler(e, values)}
              >
                <Heading align="center">Home</Heading>
                <FormControl>
                  <FormLabel paddingLeft="2">Edita el texto de bienvenida</FormLabel>
                  <Textarea
                    type="text"
                    id="welcomeText"
                    name="welcomeText"
                    onBlur={handleBlur}
                    value={values.welcomeText}
                    onChange={handleChange}
                  />
                  <small>{errors.welcomeText && touched.welcomeText && errors.welcomeText}</small>
                </FormControl>
                <Spacer />

                <Button type="submit" w="100%">
                  Guardar
                </Button>
              </VStack>
            </HStack>
          )}
        </Formik>
      )}
    </>
  )
}

export default EditWelcomeText