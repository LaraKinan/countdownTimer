import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import CountDown from 'react-native-countdown-component';
import { styles } from '../styles';

var countdownTime = 0;

class MyCountdownTime extends Component {
    state = {
        untilValueHours: 0,
        untilValueMinutes: 0,
        untilValueSeconds: 0,
        startTime: 0,
        isShown: false,
        isRunning: false
    }
    allowStart = () => {
        if((this.state.untilValueHours != 0 || this.state.untilValueMinutes != 0 || this.state.untilValueSeconds != 0) && this.state.isShown == false) {
            return true;
        }
        return false;
    }
    onFinishCountdown = () => {
        if(countdownTime != 0)
        {
            alert("Time is up");
        }
    }
    render() {
        return (
        <View style={styles.outsideContainer}>
            <View style={styles.container}>
                {this.state.isShown? <View>
                    <Text style={{fontSize: 20, marginBottom: 50, alignSelf: 'center'}}>Countdown for: {this.state.untilValueHours} Hours, {this.state.untilValueMinutes} Minutes and {this.state.untilValueSeconds} Seconds</Text>
                    <CountDown 
                        size={50}
                        until={countdownTime}
                        onFinish={this.onFinishCountdown}
                        showSeparator
                        timeToShow={['H', 'M', 'S']}
                        digitStyle= {{backgroundColor: '#efacb2', borderRadius: 40}}
                        onPress={() => {this.setState({isRunning: false});}}
                        running={this.state.isRunning}
                    />
                    <TouchableOpacity
                        onPress={() => {this.setState({isRunning: !this.state.isRunning});}}>
                        <Text style={{fontSize: 13, fontWeight: '500', alignSelf: 'center'}}>{this.state.isRunning? 'Pause' : 'Resume'}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {window.location.reload(false)}}>
                        <Text style={{fontSize: 17, marginTop: 15, fontWeight: '500', alignSelf: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                </View> : 
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>Set the time for Countdown</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Hours:</Text>
                        <TextInput
                            value={this.state.untilValueHours}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({untilValueHours : number});}}
                        />
                        <Text>Minutes:</Text>
                        <TextInput
                            value={this.state.untilValueMinutes}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({untilValueMinutes : number})}}
                        />
                        <Text>Seconds:</Text>
                        <TextInput
                            value={this.state.untilValueSeconds}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({untilValueSeconds : number})}}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {if(this.allowStart()) {this.setState({isRunning: true, isShown: true});
                        countdownTime = parseInt(this.state.untilValueHours)*3600+parseInt(this.state.untilValueMinutes)*60+parseInt(this.state.untilValueSeconds);
                        }}}>
                        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 50}}>Start</Text>
                    </TouchableOpacity>
                </View>   
                }
            </View>
        </View>
        );
    }
}
export default MyCountdownTime;