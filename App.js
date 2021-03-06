import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import { pushNotifications } from './notifications';
pushNotifications.configure();

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { authPersistor, authStore } from './redux/Stores';
import { setHost, setUserName, setToken } from './redux/AuthActions';
import Colors from './constants/Colors';

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	render() {
		//if (typeof authStore.getState().auth.host === 'undefined' || authStore.getState().auth.host === '') {
		authStore.dispatch(setHost('https://api.altair-cloud.bdozsa.com'));
		//}

		return (
			<Provider store={authStore}>
				<PersistGate loading={null} persistor={authPersistor}>
					<View style={styles.container}>
						{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
						<AppNavigator />
					</View>
				</PersistGate>
			</Provider >
		);
	}

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bg,
	},
});

/**
 * "image": "./assets/logo.png",
 * "resizeMode": "contain",
 * "backgroundColor": "#fa4800"
 */