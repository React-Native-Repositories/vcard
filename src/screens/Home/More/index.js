import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import AppHeader from '../../../components/common/AppHeader';

export default function MoreScreen() {
  return (
    <MainLayout>
      <AppHeader headerName="More" />
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
