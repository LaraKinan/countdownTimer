import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import CountDown from 'react-native-countdown-component';
import { styles } from '../styles';
import moment from 'moment/moment';

var countdownTime = 0;
const timeFormat = "DD-MM-YYYY HH:mm:ss";
var endDate = new Date();

class MyCountdownEvent extends Component {
    state = {
        dateDay: 0,
        dateMonth: 0,
        dateYear: 0,
        dateHour: 0,
        dateMins: 0,
        endTime: 0,
        isShown: false,
        isRunning: false
    }
    allowStart = () => {
        if(this.state.endTime == 0 && this.state.isShown == false) {
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
                    <Text style={{fontSize: 20, marginBottom: 50, alignSelf: 'center'}}>Countdown for: {this.state.endTime} </Text>
                    <CountDown 
                        size={50}
                        until={countdownTime}
                        onFinish={this.onFinishCountdown}
                        showSeparator
                        timeToShow={['D', 'H', 'M', 'S']}
                        digitStyle= {{backgroundColor: '#efacb2', borderRadius: 40}}
                        onPress={() => {this.setState({isRunning: false});}}
                        running={this.state.isRunning}
                    />
                    <TouchableOpacity
                        onPress={() => {window.location.reload(false)}}>
                        <Text style={{fontSize: 17, marginTop: 15, fontWeight: '500', alignSelf: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                </View> : 
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>Set the time for Countdown</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Day:</Text>
                        <TextInput
                            value={this.state.dateDay}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({dateDay: number})}}
                        />
                        <Text>Month:</Text>
                        <TextInput
                            value={this.state.dateMonth}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({dateMonth: number})}}
                        />
                        <Text>Year:</Text>
                        <TextInput
                            value={this.state.dateYear}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({dateYear: number})}}
                        />
                        <Text>Hour:</Text>
                        <TextInput
                            value={this.state.dateHour}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({dateHour: number})}}
                        />
                        <Text>Minutes:</Text>
                        <TextInput
                            value={this.state.dateMins}
                            style={styles.TextInput}
                            onChangeText={(number) => {this.setState({dateMins: number})}}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {if(this.allowStart()) {this.setState({isRunning: true, isShown: true});
                        endDate.setDate(this.state.dateDay);
                        endDate.setMonth(this.state.dateMonth - 1);
                        endDate.setFullYear(this.state.dateYear);
                        endDate.setHours(this.state.dateHour);
                        endDate.setMinutes(this.state.dateMins);
                        endDate.setSeconds(0);
                        this.state.endTime = moment(endDate).format(timeFormat);
                        countdownTime = Math.floor((endDate.getTime() - Date.now())/1000);
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
export default MyCountdownEvent;