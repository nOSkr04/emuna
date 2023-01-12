import React from "react";
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import RootNavigator  from "./RootNavigator";
import { BottomSheetParamList } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import PharmacistRequestSheet from "../sheets/PharmacistRequest";
import DrugStyleChooseSheet from "../sheets/addDrug/DrugStyleChoose";
import DosageChooseSheet from "../sheets/addDrug/DosageChoose";
import ProfileMenuSheets from "../sheets/ProfileMenu";
import HomeMedicalSheet from "../sheets/HomeMedical";
import DeleteAlertSheet from "../sheets/DeleteAlert";

const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();

const BottomSheetNavigator = () => {
  const { Navigator, Screen } = BottomSheet;

  const insets = useSafeAreaInsets();

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior={"close"} />,
    [],
  );

  return (
    <Navigator>
      <Screen component={RootNavigator} name="RootNavigator" />
      <Screen
        component={PharmacistRequestSheet}
        name="PharmacistRequestSheet"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["30%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
      <Screen
        component={HomeMedicalSheet}
        name="HomeMedicalSheet"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["90%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
      <Screen
        component={DeleteAlertSheet}
        name="DeleteAlertSheet"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["30%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />

      <Screen
        component={DrugStyleChooseSheet}
        name="DrugStyleChooseSheet"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["80%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
      <Screen
        component={DosageChooseSheet}
        name="DosageChooseSheet"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["80%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
      <Screen
        component={ProfileMenuSheets}
        name="ProfileMenuSheets"
        options={{
          backdropComponent: renderBackdrop,
          snapPoints       : ["50%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
    </Navigator>
  );
};

export { BottomSheetNavigator };
