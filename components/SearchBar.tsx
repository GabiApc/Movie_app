import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { on } from 'events';

interface Props {
	placeholder: string;
	onPress?: () => void;
	value?: string;
	onChangeText?: (text: string) => void;
}
const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
	return (
		<View className='flex-row items-center bg-[#0f0D23] rounded-full px-5 py-3'>
			<Image
				source={icons.search}
				resizeMode='contain'
				className='size-5'
				tintColor='#ab8bff'
			/>
			<TextInput
				className='flex-1 ml-2 text-white'
				placeholder={placeholder}
				placeholderTextColor='#a8b5db'
				onPress={onPress}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export default SearchBar;
