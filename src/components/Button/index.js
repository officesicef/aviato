import React from 'react';
import { Text } from 'react-native';
import { Button as ButtonBase } from 'native-base';
import PropType from 'prop-types';
import Section from '../Section';
import styles from './style';


const Button = ({ onPress, children, style }) => (
  <Section>
    <ButtonBase style={[styles.btnStyle, style]} onPress={onPress}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </ButtonBase>
  </Section>
);

Button.propTypes = {
  onPress: PropType.func.isRequired,
  children: PropType.string.isRequired,
  style: PropType.shape({}),
};

Button.defaultProps = {
  style: {},
};

export default Button;
