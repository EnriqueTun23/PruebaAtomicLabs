import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    phoneNumber: yup.string().required('Es requerido el numero')
})

export const FormValidation = ({ params, navigation }) => {
    const send = async (values) => {
        const body = { ...params, phoneNumber: values.phoneNumber }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch('https://reqres.in/api/posts', requestOptions);
            const data = await response.json();
            navigation.navigate('Thanks');
        } catch (error) {
            console.log('Error', error)
        }
    }
    return (
      <Formik
          initialValues={{ phoneNumber: ''}}
          validateOnMount={true}
          validationSchema={schema}
          onSubmit={values => send(values)}
      >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
              <View style={{ width: '100%', alignItems: 'center' }}>
                  <View style={{ width: '100%', marginTop: 20 }}>
                      <Text style={styles.label}>Número de Celular</Text>
                      <TextInput
                          keyboardType={'phone-pad'}
                          style={styles.textInput}
                          onChangeText={handleChange('phoneNumber')}
                          onBlur={handleBlur('phoneNumber')}
                          value={values.phoneNumber}
                      />
                  </View>
                  <TouchableOpacity
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
    }
})