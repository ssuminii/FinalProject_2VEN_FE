import apiClient from '@/api/apiClient';
import { API_ENDPOINTS } from '@/api/apiEndpoints';

export interface StrategyPayload {
  strategyTitle: string;
  tradingTypeId: number;
  tradingCycleId: number;
  minInvestmentAmount: string;
  strategyOverview: string;
  isPosted: string;
  investmentAssetClassesIdList: number[];
}

// 전략 등록 옵션 조회
export const fetchStrategyRegistration = async () => {
  try {
    const res = await apiClient.get(API_ENDPOINTS.STRATEGY.REGISTRATION_FORM, {
      headers: {
        'Content-Type': 'application/json',
        Auth: 'trader',
      },
    });
    console.log('옵션들,,', res.data.data);
    return res.data.data;
  } catch (error) {
    console.error('Failed to fetch strategy registration data:', error);
    throw error;
  }
};

// 전략 등록
export const submitStrategyCreate = async (payload: StrategyPayload) => {
  try {
    const { data } = await apiClient.post(API_ENDPOINTS.STRATEGY.CREATE, payload, {
      headers: {
        'Content-Type': 'application/json',
        Auth: 'trader',
      },
    });
    console.log('전략 등록 데이터,,', payload);
    return data;
  } catch (error) {
    console.error('Failed to submit strategy create:', error);
    throw error;
  }
};
