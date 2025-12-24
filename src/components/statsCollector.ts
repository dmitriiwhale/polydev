import {OrderRepository} from '../db/repositories/orderRepository'
import {Order, OrderStatus,Position, OrderSide, WalletStatsReport} from '../types'
export class StatsCollector { 
    constructor (private orderRepository: OrderRepository, private walletAddress: string, private privateKey?: string) { 

    }
    //write methods
    async recordOrder(order: Order): Promise<void> { 
        try { 
            await this.orderRepository.save(order); 
            console.log('Ордер сохранен')
        }catch (error) { 
            throw error
        }
    }

    async getAllOrders(): Promise<Order[]> { 
        try{ 
            const orders = await this.orderRepository.findAll();
            console.log(`Получено ${orders.length} оредров`);
            return orders;
        }catch(error) { 
            throw error
        }
    }

    async getOrdersByStatus(status: OrderStatus): Promise<Order[]> { 
        try{    
            const orders = await this.orderRepository.findByStatus(status); 
            console.log(`Получено ${orders.length} ордеров`)
            return orders
        }catch(error) { 
            throw error
        }
    }

    async getActivePositions(): Promise<Position[]> { 
        try{ 
            const orders = await this.orderRepository.findActive(); 
            const positions: Position[] = orders.map(order => ({ 
                market: order.market,
                side: order.side as OrderSide,
                tokens: order.size, 
                entryPrice: order.price,
                currentPrice: 0,      // заглушка
                unrealizedPnL: 0,     // заглушка
                percentChange: 0      // заглушка
            }))
            console.log(`Получено ${positions.length} активных позиций`)
            return positions
        }catch(error) { 
            throw error
        }
    }

    async getWalletReport(): Promise<void> { 
        try { 
            const allOrder = await this.getAllOrders()
        } catch (error) { 

        }
    }

    


}