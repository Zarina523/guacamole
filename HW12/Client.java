package HW12;

import java.awt.*;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.Scanner;


public class Client {
    public static void main(String[] args) throws Throwable {
        System.out.println("Starting client...");
        Socket s = new Socket(InetAddress.getLocalHost(), Protocol.PORT);
        OutputStream out = s.getOutputStream();
        System.out.println("Starting sending random colors");
        Scanner t = new Scanner(System.in);
        while(true){
            Thread.sleep(1000);
            int r = t.nextInt();
            int g = t.nextInt();
            int b = t.nextInt();
            Color c = new Color(r, g, b);
            ByteBuffer buf = ByteBuffer.allocate(12);
            buf.putInt(r).putInt(g).putInt(b);
            System.out.println(">> " + c);
            System.out.println(Arrays.toString(buf.array()));
            out.write(buf.array());
            out.flush();
        }
    }
}
