export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string
          user_id: string
          restaurant_id: string
          status: string
          total_amount: number
          delivery_address: string
          payment_status: string
          delivery_status: string
          created_at: string
          updated_at?: string
          estimated_preparation_time?: number
          delivery_instructions?: string
        }
        Insert: {
          id?: string
          user_id: string
          restaurant_id: string
          status?: string
          total_amount: number
          delivery_address: string
          payment_status?: string
          delivery_status?: string
          created_at?: string
          updated_at?: string
          estimated_preparation_time?: number
          delivery_instructions?: string
        }
        Update: {
          id?: string
          user_id?: string
          restaurant_id?: string
          status?: string
          total_amount?: number
          delivery_address?: string
          payment_status?: string
          delivery_status?: string
          created_at?: string
          updated_at?: string
          estimated_preparation_time?: number
          delivery_instructions?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          menu_item_id: string
          created_at: string
          menu_item: {
            id: string
            name: string
            description: string
            price: number
            image_url: string
          }
        }
        Insert: {
          id?: string
          user_id: string
          menu_item_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          menu_item_id?: string
          created_at?: string
        }
      }
      taxi_rides: {
        Row: {
          id: string
          user_id: string
          pickup_address: string
          destination_address: string
          pickup_time: string
          status: string
          driver_id?: string
          created_at?: string
          updated_at?: string
          estimated_price?: number
          actual_price?: number
          payment_status: string
          pickup_latitude?: number
          pickup_longitude?: number
          destination_latitude?: number
          destination_longitude?: number
          vehicle_type: string
          payment_method: string
          rating?: number
          rating_comment?: string
        }
        Insert: {
          id?: string
          user_id: string
          pickup_address: string
          destination_address: string
          pickup_time: string
          status?: string
          driver_id?: string
          created_at?: string
          updated_at?: string
          estimated_price?: number
          actual_price?: number
          payment_status?: string
          pickup_latitude?: number
          pickup_longitude?: number
          destination_latitude?: number
          destination_longitude?: number
          vehicle_type?: string
          payment_method?: string
          rating?: number
          rating_comment?: string
        }
        Update: {
          id?: string
          user_id?: string
          pickup_address?: string
          destination_address?: string
          pickup_time?: string
          status?: string
          driver_id?: string
          created_at?: string
          updated_at?: string
          estimated_price?: number
          actual_price?: number
          payment_status?: string
          pickup_latitude?: number
          pickup_longitude?: number
          destination_latitude?: number
          destination_longitude?: number
          vehicle_type?: string
          payment_method?: string
          rating?: number
          rating_comment?: string
        }
      }
      delivery_tracking: {
        Row: {
          id: string
          order_id: string
          status: string
          latitude?: number
          longitude?: number
          updated_at: string
          delivery_user_id?: string
          picked_up_at?: string
          delivered_at?: string
        }
      }
      restaurant_promotions: {
        Row: {
          id: string
          restaurant_id: string
          title: string
          description: string | null
          discount_type: 'percentage' | 'fixed_amount' | 'free_delivery'
          discount_value: number | null
          min_order_amount: number | null
          start_date: string | null
          end_date: string | null
          active: boolean
          conditions: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          title: string
          description?: string | null
          discount_type: 'percentage' | 'fixed_amount' | 'free_delivery'
          discount_value?: number | null
          min_order_amount?: number | null
          start_date?: string | null
          end_date?: string | null
          active?: boolean
          conditions?: string[] | null
          created_at?: string
        }
        Update: {
          id?: string
          restaurant_id?: string
          title?: string
          description?: string | null
          discount_type?: 'percentage' | 'fixed_amount' | 'free_delivery'
          discount_value?: number | null
          min_order_amount?: number | null
          start_date?: string | null
          end_date?: string | null
          active?: boolean
          conditions?: string[] | null
          created_at?: string
        }
      }
      detailed_restaurant_reviews: {
        Row: {
          id: string
          restaurant_id: string
          user_id: string
          order_id: string
          overall_rating: number
          food_quality_rating: number
          service_rating: number
          delivery_rating: number
          value_rating: number
          review_text: string | null
          photos: string[] | null
          helpful_count: number
          verified_purchase: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          user_id: string
          order_id: string
          overall_rating: number
          food_quality_rating: number
          service_rating: number
          delivery_rating: number
          value_rating: number
          review_text?: string | null
          photos?: string[] | null
          helpful_count?: number
          verified_purchase?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          restaurant_id?: string
          user_id?: string
          order_id?: string
          overall_rating?: number
          food_quality_rating?: number
          service_rating?: number
          delivery_rating?: number
          value_rating?: number
          review_text?: string | null
          photos?: string[] | null
          helpful_count?: number
          verified_purchase?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string;
          user_id: string;
          created_at: string;
          updated_at: string;
          dietary_restrictions: string[];
          favorite_cuisines: string[];
          preferred_restaurants: string[];
          price_preference: number;
          dark_mode: boolean;
          notifications: boolean;
          language: string;
          email_notifications: boolean;
          push_notifications: boolean;
          order_updates: boolean;
          promotional_emails: boolean;
        }
        Insert: {
          id?: string;
          user_id: string;
          created_at?: string;
          updated_at?: string;
          dietary_restrictions?: string[];
          favorite_cuisines?: string[];
          preferred_restaurants?: string[];
          price_preference?: number;
          dark_mode?: boolean;
          notifications?: boolean;
          language?: string;
          email_notifications?: boolean;
          push_notifications?: boolean;
          order_updates?: boolean;
          promotional_emails?: boolean;
        }
        Update: {
          id?: string;
          user_id?: string;
          created_at?: string;
          updated_at?: string;
          dietary_restrictions?: string[];
          favorite_cuisines?: string[];
          preferred_restaurants?: string[];
          price_preference?: number;
          dark_mode?: boolean;
          notifications?: boolean;
          language?: string;
          email_notifications?: boolean;
          push_notifications?: boolean;
          order_updates?: boolean;
          promotional_emails?: boolean;
        }
      }
      delivery_drivers: {
        Row: {
          id: string
          user_id: string
          status: 'available' | 'busy' | 'offline'
          current_latitude: number
          current_longitude: number
          last_location_update: string
          current_order_id?: string
          total_deliveries: number
          average_rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          status?: 'available' | 'busy' | 'offline'
          current_latitude?: number
          current_longitude?: number
          last_location_update?: string
          current_order_id?: string
          total_deliveries?: number
          average_rating?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: 'available' | 'busy' | 'offline'
          current_latitude?: number
          current_longitude?: number
          last_location_update?: string
          current_order_id?: string
          total_deliveries?: number
          average_rating?: number
          created_at?: string
          updated_at?: string
        }
      }
      delivery_messages: {
        Row: {
          id: string
          order_id: string
          sender_type: 'driver' | 'customer'
          sender_id: string
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          sender_type: 'driver' | 'customer'
          sender_id: string
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          sender_type?: 'driver' | 'customer'
          sender_id?: string
          message?: string
          read?: boolean
          created_at?: string
        }
      }
      delivery_zones: {
        Row: {
          id: string
          name: string
          coordinates: any
          active: boolean
          base_delivery_fee: number
          estimated_delivery_time: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          coordinates: any
          active?: boolean
          base_delivery_fee: number
          estimated_delivery_time: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          coordinates?: any
          active?: boolean
          base_delivery_fee?: number
          estimated_delivery_time?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
