import React, { useEffect, useRef, useState } from 'react';
import { VStack, Button, Text } from 'native-base';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import OuroVideo from './assets/Ouro.mp4';
import PrataVideo from './assets/Prata.mp4';
import BronzeVideo from './assets/Bronze.mp4';

export default function Conquista() {
    const route = useRoute();
    const navigation = useNavigation();
    const { totalPoints } = route.params;
    const videoRef = useRef<Video>(null);
    const [videoTerminado, setVideoTerminado] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playAsync();
            videoRef.current.setOnPlaybackStatusUpdate(handleAtualizacaoStatusPlayback);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.unloadAsync();
            }
        };
    }, []);

    const handleAtualizacaoStatusPlayback = (status: any) => {
        if (!videoTerminado && status.isLoaded && !status.isPlaying && status.positionMillis === status.durationMillis) {
            setVideoTerminado(true);
        }
    };

    let videoTrofeu: any = BronzeVideo;
    let classificacao = 'Bronze';

    if (totalPoints >= 70 && totalPoints < 100) {
        videoTrofeu = PrataVideo;
        classificacao = 'Prata';
    } else if (totalPoints >= 100) {
        videoTrofeu = OuroVideo;
        classificacao = 'Ouro';
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" style={{ backgroundColor: '#20A7A2', position: 'relative' }}>
            <Video
                ref={videoRef}
                source={videoTrofeu}
                resizeMode="cover"
                shouldPlay
                isLooping={false}
                style={{ width: '100%', height: '100%' }}
            />
            {videoTerminado && (
                <VStack position="absolute" bottom={20} width="100%" alignItems="center">
                    <Button onPress={() => navigation.navigate('Onboarding')} style={{ backgroundColor: '#FFFF'}}>
                         <Text style={{ color: '#20A7A2', fontWeight:'bold' }}>Refazer Formulário</Text>
                    </Button>
                </VStack>
            )}
        </VStack>
    );
}
