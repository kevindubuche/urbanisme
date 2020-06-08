<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function sendEmail(Request $request)
    {
        // $title = '[Confirmation] Thank you for your order';
        // $body='this is the body of the mail';
        // $customer_details = [
        //     'name' => 'Arogya',
        //     'address' => 'kathmandu Nepal',
        //     'phone' => '123123123',
        //     'email' => 'testemail@example.com'
        // ];
        // $order_details = [
        //     'SKU' => 'D-123456',
        //     'price' => '10000',
        //     'order_date' => '2020-01-22',
        // ];

    //     $sendmail = Mail::to('kevin.dubuche@student.ueh.edu.ht')->send(new SendMail($title , $body, $request->content, $customer_details, $order_details)
    // )->setBody('okookokokoko');
  $sendmail=  Mail::send([], [], function ($message) use ($request){
        $message->to('kevin.dubuche@student.ueh.edu.ht')
          ->subject('MESSAGE D\'UN VISITEUR DU SITE WEB URBATeR')
          // here comes what you want
          ->setBody($request->message); // assuming text/plain
      });
        if (empty($sendmail)) {
            return response()->json(['message' => 'Mail Sent Sucssfully'], 200);
        }else{
            return response()->json(['message' => 'Mail Sent fail'], 400);
        }
    }
}