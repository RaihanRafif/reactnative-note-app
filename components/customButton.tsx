import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = ({
    backgroundColor,
    color,
    text,
    onPress,
    fontSize = 16,
    width = 120,
    marginTop = 0
}: any) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor,
            width,
            padding: 10,
            marginTop
        },
        buttonText: {
            fontSize,
            fontWeight: '700',
            color,
        },
    })

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton