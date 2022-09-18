import React from 'react'

import { Formik } from 'formik';
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';

import * as yup from 'yup';

const schema = yup.object().shape({
    firstname: yup.string().min(5, ({min}) => `El nombre deberá tener minimo ${min} caracteres`).required('Nombre requerido'),
    lastname: yup.string().required('Apellidos requeridos')
});

export const FormSignUp = ({ navigation }) => {

  const sendParams = async(values) => {
    navigation.navigate('Validation', values);
  }

  return (
      <Formik
          initialValues={{ firstname: '', lastname: '' }}
          validateOnMount={true}
          validationSchema={schema}
          onSubmit={values => sendParams(values)}
      >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
              <View style={{ width: '100%', alignItems: 'center'}}>
                  <View style={{ width: '100%', marginTop: 20}}>
                    <Text style={styles.label}>Nombre (s)</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        value={values.firstname}
                    />
                  {(errors.firstname && touched.firstname) && 
                    <Text style={styles.errors}>{errors.firstname}</Text>
                  }
                  </View>
                  <View style={{ width: '100%', marginTop: 10 }} >
                      <Text style={styles.label}>Apellidos (s)</Text>
                      <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('lastname')}
                          onBlur={handleBlur('lastname')}
                          value={values.lastname}
                      />
                  {(errors.lastname && touched.lastname) &&
                      <Text style={styles.errors}>{errors.lastname}</Text>
                  }
                  </View>
                  <TouchableOpacity
                    //   disabled={!isValid ? '#FA4D09' : 'green'}
                      onPress={handleSubmit}
                      style={[styles.btn, { backgroundColor: !isValid ? 'rgba(250, 77, 9, 0.5)' : '#FA4D09' }]}
                  >
                      <Text style={styles.btnText}>Enviar</Text>
                    </TouchableOpacity> 
              </View>
          )}
      </Formik>
  )
}

const styles = StyleSheet.create({
    errors: {
        fontSize: 16,
        color: 'red',
        fontWeight: '700',
        marginTop: 5,
    },
    label: {
        color: '#fff',
        marginBottom: 8,
        fontSize: 16,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'black',
    },
    btn: {
        marginTop: 35,
        elevation: 8,
        width: 220,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
    }
})