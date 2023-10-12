import { Stories } from '@/mocks';
import { MediaResponse, StoryResponse } from '@/models';
import { AuthorizedStackParamList } from '@/navigators/Authorized.navigator';
import { WIDTH, hs } from '@/theme';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Easing,
  cancelAnimation,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useStoryModal = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<StoryResponse[]>(
    JSON.parse(JSON.stringify(Stories)),
  );
  const route = useRoute<RouteProp<AuthorizedStackParamList, 'StoryModal'>>();

  const storyId = useMemo(() => {
    return route.params?.storyId ?? '1';
  }, [route.params?.storyId]);

  const currentIndex = useMemo(() => {
    const lastViewedStory: MediaResponse[] = data[storyId].medias.filter(
      (item: MediaResponse) => item.isViewed ?? false,
    );

    return lastViewedStory.length;
  }, [data, storyId]);

  useEffect(() => {
    setCurrentStep(currentIndex);
  }, [currentIndex]);

  const linear = useSharedValue(0);

  const duration = 5 * 1000;
  const width = (WIDTH - hs(4)) / data[storyId].medias.length;

  /**
   * The function `onPause` cancels a linear animation.
   */
  const onPause = () => {
    cancelAnimation(linear);
  };

  /**
   * The `onResume` function calculates the final duration for an animation based on the distance
   * between two points and then animates a value using that duration.
   */
  const onResume = () => {
    const totalDistance = width - hs(4);
    const distanceAB = linear.value;
    const distanceBC = totalDistance - distanceAB;

    const finalDuration = (distanceBC / totalDistance) * duration;

    linear.value = withTiming(
      width - hs(4),
      {
        duration: finalDuration,
        easing: Easing.linear,
      },
      (isFinished: boolean | undefined) => {
        if (isFinished) {
          runOnJS(onStoryPress)();
        }
      },
    );
  };

  /* The `onStoryPress` function is a callback function that is called when a user presses on a story. */
  const onStoryPress = useCallback(() => {
    // Check if there are more steps
    if (currentStep < Stories[storyId].medias.length - 1) {
      linear.value = 0;
      // Move to the next step
      setCurrentStep(currentStep + 1);
      setData(prevState => {
        const oldData = [...prevState];
        oldData[storyId].medias[currentStep].isViewed = true;

        return [...prevState, ...oldData];
      });
    } else {
      // All steps completed
      // You can navigate to a different screen or reset the process
      runOnJS(navigateGoBack)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, navigation, storyId]);

  function navigateGoBack() {
    ('worklet');
    navigation?.goBack();
  }

  const getter = {
    storyId,
    width,
    linear,
    duration,
    currentIndex,
    data,
    currentStep,
  };
  const setter = { onStoryPress, onPause, onResume };

  return {
    getter,
    setter,
  };
};

export default useStoryModal;
