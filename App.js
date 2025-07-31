import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('home');

  // Prayer times data
  const prayerTimes = [
    { name: 'Fajr', time: '03:05 am', isMuted: true },
    { name: 'Sunrise', time: '05:44 am', isMuted: true },
    { name: 'Dhuhr', time: '01:25 pm', isMuted: true },
    { name: 'Asr', time: '05:33 pm', isMuted: true },
    { name: 'Maghrib', time: '09:03 pm', isMuted: true },
    { name: 'Isha', time: '11:25 pm', isMuted: true },
  ];

  // Product data
  const products = [
    { id: 1, image: 'https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=100+Pcs' },
    { id: 2, image: 'https://via.placeholder.com/80x80/000000/FFFFFF?text=Bag' },
    { id: 3, image: 'https://via.placeholder.com/80x80/8B4513/FFFFFF?text=Leather' },
    { id: 4, image: 'https://via.placeholder.com/80x80/FFD700/000000?text=Jewelry' },
    { id: 5, image: 'https://via.placeholder.com/80x80/D2B48C/000000?text=Shoes' },
    { id: 6, image: 'https://via.placeholder.com/80x80/FF6B35/FFFFFF?text=TEMU' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderPrayerTimes = () => (
    <View style={styles.prayerSection}>
      <View style={styles.prayerHeader}>
        <View style={styles.prayerTitleContainer}>
          <View style={styles.alarmIcon}>
            <Ionicons name="alarm" size={20} color="white" />
          </View>
          <Text style={styles.prayerTitle}>Prayer Times for Kernstadt Meiningen</Text>
        </View>
      </View>
      
      {prayerTimes.map((prayer, index) => (
        <View key={index} style={styles.prayerRow}>
          <View style={styles.prayerInfo}>
            <Text style={styles.prayerName}>{prayer.name}</Text>
            <Text style={styles.muteText}>Mute</Text>
          </View>
          <View style={styles.prayerTimeContainer}>
            <Text style={styles.prayerTime}>{prayer.time}</Text>
            <Ionicons 
              name="volume-mute" 
              size={20} 
              color="#999" 
              style={styles.muteIcon}
            />
          </View>
        </View>
      ))}
      
      <TouchableOpacity style={styles.monthlyButton}>
        <Text style={styles.monthlyButtonText}>MONTHLY PRAYER TIMES</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRamadanSection = () => (
    <View style={styles.ramadanSection}>
      <View style={styles.ramadanHeader}>
        <View style={styles.ramadanIcon}>
          <FontAwesome5 name="mosque" size={20} color="white" />
        </View>
        <Text style={styles.ramadanTitle}>Welcome Ramadan</Text>
      </View>
      
      <View style={styles.ramadanImageContainer}>
        <LinearGradient
          colors={['#1a237e', '#0d47a1', '#1565c0']}
          style={styles.ramadanImage}
        >
          <FontAwesome5 name="moon" size={60} color="#FFD700" />
          <View style={styles.lanternsContainer}>
            <FontAwesome5 name="lightbulb" size={20} color="#FFD700" style={styles.lantern} />
            <FontAwesome5 name="lightbulb" size={20} color="#FFD700" style={styles.lantern} />
            <FontAwesome5 name="lightbulb" size={20} color="#FFD700" style={styles.lantern} />
          </View>
        </LinearGradient>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderNavigationBar = () => (
    <View style={styles.navigationBar}>
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'home' && styles.activeNavItem]}
        onPress={() => setActiveTab('home')}
      >
        <Ionicons 
          name="menu" 
          size={24} 
          color={activeTab === 'home' ? 'white' : '#4CAF50'} 
        />
        <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'qibla' && styles.activeNavItem]}
        onPress={() => setActiveTab('qibla')}
      >
        <FontAwesome5 
          name="compass" 
          size={24} 
          color={activeTab === 'qibla' ? 'white' : '#4CAF50'} 
        />
        <Text style={[styles.navText, activeTab === 'qibla' && styles.activeNavText]}>Qibla</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'dhikr' && styles.activeNavItem]}
        onPress={() => setActiveTab('dhikr')}
      >
        <FontAwesome5 
          name="pray" 
          size={24} 
          color={activeTab === 'dhikr' ? 'white' : '#4CAF50'} 
        />
        <Text style={[styles.navText, activeTab === 'dhikr' && styles.activeNavText]}>Dhikr</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'quran' && styles.activeNavItem]}
        onPress={() => setActiveTab('quran')}
      >
        <FontAwesome5 
          name="book-open" 
          size={24} 
          color={activeTab === 'quran' ? 'white' : '#4CAF50'} 
        />
        <Text style={[styles.navText, activeTab === 'quran' && styles.activeNavText]}>Quran</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navItem, activeTab === 'all' && styles.activeNavItem]}
        onPress={() => setActiveTab('all')}
      >
        <Ionicons 
          name="ellipsis-vertical" 
          size={24} 
          color={activeTab === 'all' ? 'white' : '#4CAF50'} 
        />
        <Text style={[styles.navText, activeTab === 'all' && styles.activeNavText]}>All</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStatusBar = () => (
    <View style={styles.statusBar}>
      <View style={styles.statusBarLeft}>
        <Text style={styles.statusBarTime}>
          {currentTime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })}
        </Text>
        <View style={styles.statusBarIcons}>
          <View style={styles.greenTriangle} />
          <View style={styles.greenTriangle} />
          <View style={styles.greenTriangle} />
          <View style={styles.greenDot} />
        </View>
      </View>
      
      <View style={styles.statusBarRight}>
        <Ionicons name="wifi" size={16} color="#4CAF50" />
        <Ionicons name="location" size={16} color="#4CAF50" />
        <Text style={styles.networkText}>5G</Text>
        <View style={styles.signalBars}>
          <View style={styles.signalBar} />
          <View style={styles.signalBar} />
          <View style={styles.signalBar} />
          <View style={styles.signalBar} />
        </View>
        <View style={styles.batteryContainer}>
          <View style={styles.battery}>
            <View style={styles.batteryLevel} />
          </View>
          <Text style={styles.batteryText}>76%</Text>
        </View>
      </View>
    </View>
  );

  // Web-specific wrapper
  if (Platform.OS === 'web') {
    return (
      <div style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        margin: 0,
        padding: 0
      }}>
        <div style={{ 
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#4CAF50', marginRight: '4px' }}>●●●</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '3px', backgroundColor: '#4CAF50', marginLeft: '4px' }}></span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>📶</span>
            <span style={{ marginRight: '8px' }}>📍</span>
            <span style={{ fontSize: '12px', marginRight: '8px' }}>5G</span>
            <span style={{ fontSize: '12px' }}>76%</span>
          </div>
        </div>
        
        <div style={{ padding: '16px', backgroundColor: 'white' }}>
          {/* Prayer Times Section */}
          <div style={{ 
            backgroundColor: 'white',
            margin: '16px',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: '#f44336',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '12px'
                }}>
                  ⏰
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                  Prayer Times for Kernstadt Meiningen
                </span>
              </div>
            </div>
            
            {prayerTimes.map((prayer, index) => (
              <div key={index} style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#4CAF50' }}>
                    {prayer.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#999', marginTop: '2px' }}>
                    Mute
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginRight: '8px' }}>
                    {prayer.time}
                  </span>
                  <span style={{ color: '#999' }}>🔇</span>
                </div>
              </div>
            ))}
            
            <button style={{ 
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              marginTop: '16px',
              cursor: 'pointer'
            }}>
              MONTHLY PRAYER TIMES
            </button>
          </div>
          
          {/* Ramadan Section */}
          <div style={{ 
            backgroundColor: 'white',
            margin: '16px',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ 
                width: '32px',
                height: '32px',
                borderRadius: '16px',
                backgroundColor: '#9c27b0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '12px'
              }}>
                🕌
              </div>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                Welcome Ramadan
              </span>
            </div>
            
            <div style={{ 
              height: '200px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #1a237e, #0d47a1, #1565c0)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '16px'
            }}>
              <div style={{ fontSize: '60px', color: '#FFD700' }}>🌙</div>
              <div style={{ 
                position: 'absolute',
                top: '20px',
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
                padding: '0 20px'
              }}>
                <span style={{ fontSize: '20px', color: '#FFD700', margin: '0 10px' }}>💡</span>
                <span style={{ fontSize: '20px', color: '#FFD700', margin: '0 10px' }}>💡</span>
                <span style={{ fontSize: '20px', color: '#FFD700', margin: '0 10px' }}>💡</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', overflowX: 'auto' }}>
              {products.map((product) => (
                <div key={product.id} style={{ marginRight: '12px' }}>
                  <img src={product.image} style={{ 
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px'
                  }} alt="Product" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div style={{ 
          display: 'flex',
          backgroundColor: '#4CAF50',
          padding: '8px 16px'
        }}>
          {['home', 'qibla', 'dhikr', 'quran', 'all'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '8px',
                backgroundColor: activeTab === tab ? 'rgba(255,255,255,0.2)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: activeTab === tab ? 'white' : '#4CAF50',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '24px', marginBottom: '4px' }}>
                {tab === 'home' ? '☰' : 
                 tab === 'qibla' ? '🧭' : 
                 tab === 'dhikr' ? '🙏' : 
                 tab === 'quran' ? '📖' : '⋮'}
              </span>
              <span style={{ 
                fontSize: '12px',
                fontWeight: '500',
                color: activeTab === tab ? 'white' : '#4CAF50'
              }}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      
      {renderStatusBar()}
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderPrayerTimes()}
        {renderRamadanSection()}
      </ScrollView>
      
      {renderNavigationBar()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
  },
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarTime: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  statusBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4CAF50',
    marginRight: 2,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginLeft: 4,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  networkText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 12,
    marginLeft: 8,
  },
  signalBar: {
    width: 3,
    backgroundColor: 'white',
    marginRight: 1,
    borderRadius: 1,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  battery: {
    width: 20,
    height: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    marginRight: 4,
  },
  batteryLevel: {
    width: 15,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 1,
    margin: 1,
  },
  batteryText: {
    color: 'white',
    fontSize: 12,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  prayerSection: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  prayerHeader: {
    marginBottom: 16,
  },
  prayerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alarmIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  prayerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  prayerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  prayerInfo: {
    flex: 1,
  },
  prayerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
  muteText: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  prayerTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayerTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  muteIcon: {
    marginLeft: 4,
  },
  monthlyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  monthlyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ramadanSection: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ramadanHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ramadanIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#9c27b0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  ramadanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ramadanImageContainer: {
    marginBottom: 16,
  },
  ramadanImage: {
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  lanternsContainer: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  lantern: {
    marginHorizontal: 10,
  },
  productsContainer: {
    flexDirection: 'row',
  },
  productItem: {
    marginRight: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  navigationBar: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeNavItem: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
  },
  navText: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 4,
    fontWeight: '500',
  },
  activeNavText: {
    color: 'white',
  },
}); 