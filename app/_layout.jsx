import { Link, Stack } from 'expo-router';
import { IconSymbol } from './components/IconSymbol';


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ 
          headerLargeTitle: true,
          headerTitle: "Groups",
          headerRight: () => (
            <Link href="/newGroup">
              <IconSymbol name="plus" />
            </Link>
          )   
        }}
      />
      <Stack.Screen name='newGroup' options={{
        presentation: "modal",
        headerTitle: "New Group",
        headerLeft: () => (
            <Link dismissTo href="/">
              <IconSymbol name="chevron.left" />
            </Link>
          )
        }} 
      />
      <Stack.Screen
        name='[group]'
        options={{
          headerTitle: "group"
        }}
        />
    </Stack>
  );
}
