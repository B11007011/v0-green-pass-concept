/**
 * API service for data fetching and API communication
 */

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: { revalidate?: number | false };
  tags?: string[];
};

/**
 * Base API fetcher with error handling and automatic JSON parsing
 */
async function fetchAPI<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const {
    method = 'GET',
    body,
    headers = {},
    cache,
    next,
    tags,
  } = options;

  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    cache,
    next,
    ...(tags ? { next: { ...next, tags } } : {}),
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `API error: ${response.status} ${response.statusText}${
          errorData ? ` - ${JSON.stringify(errorData)}` : ''
        }`
      );
    }

    // Parse JSON response
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Fetcher with retry logic for unstable connections
 */
export async function fetchWithRetry<T>(
  url: string,
  options: FetchOptions = {},
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fetchAPI<T>(url, options);
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    
    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Retry with exponential backoff
    return fetchWithRetry<T>(url, options, retries - 1, delay * 2);
  }
}

// API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const UserAPI = {
  /**
   * Get user profile data
   */
  getProfile: () => 
    fetchWithRetry<UserProfile>(`${API_BASE_URL}/user/profile`, {
      cache: 'no-store',
    }),
  
  /**
   * Get user stats
   */
  getStats: () => 
    fetchWithRetry<UserStats>(`${API_BASE_URL}/user/stats`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }),
  
  /**
   * Update user profile
   */
  updateProfile: (data: Partial<UserProfile>) => 
    fetchWithRetry<UserProfile>(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      body: data,
    }),
};

export const TransportAPI = {
  /**
   * Get transport usage history
   */
  getUsageHistory: (period: string = 'month') => 
    fetchWithRetry<TransportUsage[]>(`${API_BASE_URL}/transport/usage?period=${period}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }),
  
  /**
   * Get carbon savings
   */
  getCarbonSavings: (period: string = 'month') => 
    fetchWithRetry<CarbonSavings[]>(`${API_BASE_URL}/transport/carbon?period=${period}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }),
  
  /**
   * Record a new transport activity
   */
  recordActivity: (data: TransportActivity) => 
    fetchWithRetry<TransportActivity>(`${API_BASE_URL}/transport/activity`, {
      method: 'POST',
      body: data,
    }),
};

export const RewardsAPI = {
  /**
   * Get available rewards
   */
  getAvailableRewards: () => 
    fetchWithRetry<Reward[]>(`${API_BASE_URL}/rewards/available`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }),
  
  /**
   * Get user's redeemed rewards
   */
  getRedeemedRewards: () => 
    fetchWithRetry<RedeemedReward[]>(`${API_BASE_URL}/rewards/redeemed`, {
      cache: 'no-store',
    }),
  
  /**
   * Redeem a reward
   */
  redeemReward: (rewardId: string) => 
    fetchWithRetry<RedeemedReward>(`${API_BASE_URL}/rewards/redeem`, {
      method: 'POST',
      body: { rewardId },
    }),
};

// Type definitions
export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location?: string;
  preferences?: Record<string, any>;
};

export type UserStats = {
  greenCredits: number;
  carbonSaved: number;
  weeklyChange: number;
  monthlyGoal: number;
  progressPercentage: number;
};

export type TransportUsage = {
  type: string;
  count: number;
  distance: number;
  percentage: number;
};

export type CarbonSavings = {
  date: string;
  amount: number;
};

export type TransportActivity = {
  type: string;
  from: string;
  to: string;
  distance: number;
  timestamp: string;
};

export type Reward = {
  id: string;
  title: string;
  description: string;
  creditCost: number;
  image: string;
  category: string;
  expiresAt?: string;
};

export type RedeemedReward = {
  id: string;
  rewardId: string;
  redeemedAt: string;
  expiresAt: string;
  code?: string;
  used: boolean;
}; 