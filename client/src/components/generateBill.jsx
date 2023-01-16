import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import 'moment-timezone';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
		padding: '10px',
		border: '1px solid red'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 2,
		fontSize: 20
	},
	text: {
		fontSize: 15,
		marginTop: 10
	}
});

// Create Document Component
const GenerateBill = ({
	userName,
	id,
	dateOfIssue,
	dueDate,
	arrearAmount,
	waterCharges,
	conservancyCharges,
	streetLightCharges,
	roadMaintenanceCharges,
	graveyardCharges,
	electricityCharges,
	dueAmount,
	totalAmount
}) => (
	<Document style={{ backgroundColor: 'blue' }}>
		<Page size='B5' style={{ backgroundColor: '#f7f7f7' }}>
			<View style={styles.section}>
				<Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>
					Airport Housing Society Bill
				</Text>
				<Text style={styles.text}>Name: {userName}</Text>
				<Text style={styles.text}>Bill Id: {id}</Text>
				<Text style={styles.text}>Date of Issue: {dateOfIssue}</Text>
				<Text style={styles.text}>Due Date: {dueDate}</Text>
				<Text style={styles.text}>Arrear Amount: {arrearAmount}</Text>
				<Text style={styles.text}>Water Charges: {waterCharges}</Text>
				<Text style={styles.text}>
					Conservancy Charges: {conservancyCharges}
				</Text>
				<Text style={styles.text}>
					Street Light Charges: {streetLightCharges}
				</Text>
				<Text style={styles.text}>
					Road Maintenance Charges: {roadMaintenanceCharges}
				</Text>
				<Text style={styles.text}>Graveyard Charges: {graveyardCharges}</Text>
				<Text style={styles.text}>
					Electricity Charges: {electricityCharges}
				</Text>
				<Text style={styles.text}>Total Amount: {totalAmount}</Text>
				<Text style={styles.text}>Due Amount: {dueAmount}</Text>
			</View>
		</Page>
	</Document>
);

export default GenerateBill;
