require_relative 'paypal_client'
require 'json'
require 'ostruct'

include PayPalCheckoutSdk::Orders

module Samples
  class GetOrder

    #2. Set up your server to receive a call from the client
    # You can use this function to retrieve an order by passing order ID as an argument
    def get_order(order_id)
      request = OrdersGetRequest::new(order_id)
      #3. Call PayPal to get the transaction
      response = PayPalClient::client::execute(request)
      #4. Save the transaction in your database. Implement logic to save transaction to your database for future reference.
      puts "Status Code: #"
      puts "Status: #"
      puts "Order ID: #"
      puts "Intent: #"
      puts "Links:"
      for link in response.result.links
        # You could also call this link.rel or link.href, but method is a reserved keyword for RUBY. Avoid calling link.method.
        puts "\t#{link["rel"]}: #{link["href"]}\tCall Type: #{link["method"]}"
      end
      puts "Gross Amount: # #"
    end
  end
end

# This is the driver function that invokes the get_order function
# with order ID to retrieve sample order details.

# if __FILE__ == $0
#   Samples::GetOrder::new::get_order('REPLACE-WITH-VALID-ORDER-ID')
# end