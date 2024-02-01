import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const TableViewReport = ({ data }) => {
    const tableHead = ['Parameter', 'Value'];
    const tableData = Object.entries(data).map(([key, value]) => [key, value]);

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                {tableData.map((rowData, index) => (
                    <Row
                        key={index}
                        data={rowData}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.text}
                    />
                ))}
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});

export default TableViewReport;
