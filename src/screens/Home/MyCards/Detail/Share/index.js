import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainLayout from '../../../../../Layout/MainLayout'
import AppHeader from '../../../../../components/common/AppHeader'

export default function Share() {
  return (
    <MainLayout>
      <AppHeader
        headerName={'Share'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
      />
    </MainLayout>
  )
}

const styles = StyleSheet.create({})