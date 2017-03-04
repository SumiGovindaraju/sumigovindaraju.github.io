package myStuff;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.image.BufferedImage;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;


public class GameOfLife extends JFrame implements KeyListener {
	/**
	 * Based on Conway's Game Of Life.
	 */
	private static final long serialVersionUID = -2141025446302447466L;

	static long generation = 0;
	static int width = 1500, height = 1500;
	static int cellWidth = 15;
	static int cellHeight = 15;
	static int proportionalWidth = width/cellWidth;
	static int proportionalHeight = height/cellHeight;
	static boolean[][] block = new boolean[proportionalWidth][proportionalHeight];
	static GameOfLife frame;
	static boolean isPlay = true;
	static BufferedImage img = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);

	public static void main(String[] args) throws InterruptedException {
		frame = new GameOfLife();
		frame.setResizable(false);
		while (true) {
			if (isPlay) {
				step();
				frame.repaint();
				Thread.sleep(10);
			}
		}
	}

	GameOfLife() {
		setTitle("Game Of Life");
		setSize(width, height);
		addKeyListener(this);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
		for (int i = 0; i < proportionalWidth; i++) {
			for (int j = 0; j < proportionalHeight; j++) {
				if (Math.random() > 0.75)
					block[i][j] = true;
				else
					block[i][j] = false;
			}
		}
		repaint();
	}

	public void paint(Graphics g) {
		super.paint(g);
		Graphics2D graph = img.createGraphics();
		for (int i = 0; i < proportionalWidth; i++) {
			for (int j = 0; j < proportionalWidth; j++) {
				if (block[i][j])
					graph.setColor(Color.BLACK);
				else
					graph.setColor(Color.WHITE);
				graph.fillRect(i*cellWidth, j*cellHeight, cellWidth, cellHeight);
			}
		}
		generation++;
		frame.getContentPane().add(new JLabel(new ImageIcon(img)));
		frame.setTitle("Generation: " + generation);
	}

	private static void step() {
		boolean[][] blockNextGen = new boolean[proportionalWidth][proportionalHeight];
		for (int i = 0; i < proportionalWidth; i++) {
			for (int j = 0; j < proportionalHeight; j++) {
				int count = 0;
				if (i >= 1 && j >= 1 && block[i-1][j-1]) {
					count++;
				}
				if (j >= 1 && block[i][j-1])
					count++;
				if (i < (proportionalWidth-1) && j >= 1 && block[i+1][j-1])
					count++;
				if (i >= 1 && block[i-1][j])
					count++;
				if (i < (proportionalWidth-1) && block[i+1][j])
					count++;
				if (i >= 1 && j < (proportionalHeight-1) && block[i-1][j+1])
					count++;
				if (j < (proportionalHeight-1) && block[i][j+1])
					count++;
				if (i < (proportionalWidth-1) && j < (proportionalHeight-1) && block[i+1][j+1])
					count++;
				blockNextGen[i][j] = count == 3 || (block[i][j] && count == 2);
			}
		}
		block = blockNextGen;
	}

	@Override
	public void keyPressed(KeyEvent arg0) {isPlay = !isPlay;}

	@Override
	public void keyReleased(KeyEvent arg0) {}

	@Override
	public void keyTyped(KeyEvent arg0) {}
}

