import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import { pushNotifications } from './notifications';
pushNotifications.configure();

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	render() {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
				<AppNavigator />
			</View>
		);
	}

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

/**
 * "image": "./assets/logo.png",
 * "resizeMode": "contain",
 * "backgroundColor": "#fa4800"
 */